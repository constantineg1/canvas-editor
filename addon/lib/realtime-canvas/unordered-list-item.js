import ContentBlock from './content-block';

const { computed } = Ember;

/**
 * A block representing a paragraph.
 *
 * @class CanvasEditor.RealtimeCanvas.UnorderedListItem
 * @extends CanvasEditor.RealtimeCanvas.ContentBlock
 */
export default ContentBlock.extend({
  type: 'unordered-list-item',
  meta: computed(_ => Ember.Object.create({ level: 1 }))
}).reopenClass({
  createFromMarkdown(markdown, properties) {
    const content = markdown.split(/^- /)[1] || '';
    return this.create(Object.assign(properties, { content }));
  }
});
